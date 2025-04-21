'use server';

//By adding the 'use server', you mark all the exported functions within the file as Server Actions. 
// These server functions can then be imported and used in Client and Server components. 
// Any functions included in this file that are not used will be automatically removed from the final application bundle.
// - taken from the nextjs documentation

import { z } from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache'; // revalidatePath is used to revalidate the path of the page after the action is completed
import { redirect } from 'next/navigation'; // Redirect is used to redirect the user to a different page after the action is completed


const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' }); // connect to the database


// basic approach: getting the form data and parsing it to a JSON object
// export async function createInvoice(formData: FormData) {
//     const rawFormData = {
//         customerID: formData.get('customerId'),
//         amount: formData.get('amount'),
//         status: formData.get('status'),
//     }
//     console.log(rawFormData);
// }



// checking the type of the form data using zod
const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
  });

  const CreateInvoice = FormSchema.omit({ id: true, date: true });

    // The omit method is used to remove the id and date fields from the schema, as they are not needed when creating a new invoice.
  const UpdateInvoice = FormSchema.omit({ id: true, date: true });


  export async function createInvoice(formData: FormData) {
    const { customerId, amount, status } = CreateInvoice.parse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });
   
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];
   
    try {
      await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
      `;
    } catch (error) {
      // We'll log the error to the console for now
      console.error(error);
    }
    
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
  }



  export async function updateInvoice(id: string, formData: FormData) {
    const { customerId, amount, status } = UpdateInvoice.parse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });
   
    const amountInCents = amount * 100;
   
    try {
      await sql`
          UPDATE invoices
          SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
          WHERE id = ${id}
        `;
    } catch (error) {
      // We'll log the error to the console for now
      console.error(error);
    }
   
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
  }



  export async function deleteInvoice(id: string) {
    // throw new Error('Failed to Delete Invoice'); // This is just for testing purposes, to see if the error handling works
    
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
  }





  {/* Note how redirect is being called outside of the try/catch block. This is because redirect works by throwing an error, 
    which would be caught by the catch block. To avoid this, you can call redirect after try/catch. redirect would only be reachable if try is successful.
    We're gracefully handling these errors by catching the database issue, and returning a helpful message from our Server Action.
    -taken from the nextjs documentation
    */} 
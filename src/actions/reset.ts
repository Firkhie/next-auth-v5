"use server";

import * as z from "zod";

import { ResetSchema } from "@/schemas";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generateResetPasswordToken } from "@/lib/tokens";
import { getUserByEmail } from "@/data/user";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid email!" };
  }

  const { email } = validatedFields.data;

  // Should always return 'Reset email sent!' message no matter if the user email exists or not for security purposes.
  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return { success: "Reset email sent!" };
  }

  const passwordResetRoken = await generateResetPasswordToken(email);
  await sendPasswordResetEmail(
    passwordResetRoken.email,
    passwordResetRoken.token
  );

  return { success: "Reset email sent!" };
};

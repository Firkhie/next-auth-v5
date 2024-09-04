import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export default async function ServerPage() {
  revalidatePath("/server");
  const user = await currentUser();

  return <UserInfo label="Server component" user={user} />;
}

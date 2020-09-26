import { getToken } from "@@/_core/store/sessionService";

const auth = async (context) => {
  const { redirect } = context;

  const session = await getToken(context);

  const {
    data: { item },
  } = session;
  
  console.log(item.code);

  if (item.code === "unsigned") {
    redirect("/login");
  }
};

export default auth;

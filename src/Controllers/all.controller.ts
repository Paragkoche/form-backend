import db from "../database";
import * as Entity from "../database/entites";

interface error {
  status: number;
  message: any;
}

//User
export const AddUser = async (data: {
  firstName: string;
  email: string;
  phone: string;
  whatsappNo: string;
  designation: string;
  company_exhibit: boolean;
  company: string;
  website: string;
  address: string;
  password: String;
  Marketing_Sales_Name: string;
  Marketing_Sales_Whatsapp_Number: string;
  Marketing_Sales_designation: string;
  Marketing_Sales_email: string;
  Accounts_Finance_name: string;
  Accounts_Finance_Whatsapp_Number: string;
  Accounts_Finance_designation: string;
  Accounts_Finance_email: string;
  event_coordinator_name: string;
  event_coordinator_Whatsapp_Number: string;
  event_coordinator_designation: string;
  event_coordinator_email: string;
  category: string;
  product: string;
}): Promise<{ status: number; data: Entity.Users } | error> => {
  try {
    const User = await db.getRepository(Entity.Users).save(
      db.getRepository(Entity.Users).create({
        ...data,
      })
    );
    return {
      data: { ...User, password: undefined },
      status: 200,
    };
  } catch (e) {
    console.log(e);

    return {
      status: 501,
      message: e,
    };
  }
};
export const GetOneUser = async (
  id: string | any
): Promise<
  | {
      status: number;
      data: Entity.Users;
    }
  | error
> => {
  try {
    const data = await db
      .getRepository(Entity.Users)
      .findOne({ where: { id: id } });
    return {
      status: 200,
      data,
    };
  } catch (e) {
    console.log(e);

    return {
      status: 501,
      message: e,
    };
  }
};

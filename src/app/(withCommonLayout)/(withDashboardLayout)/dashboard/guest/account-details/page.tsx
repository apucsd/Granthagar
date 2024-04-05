"use client";

import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import { Button } from "@/components/ui/button";
import { useDefaultValues } from "@/constants/constant";
import { useUpdateUserMutation } from "@/redux/api/userApi";
import { userSchema } from "@/schema/validation.schema";
import { getUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const AccountDetailsPage = () => {
  const [updateUser] = useUpdateUserMutation();
  const [user, setUser] = useState<null | Record<string, any>>(null);
  useEffect(() => {
    const user = getUserInfo();
    setUser(user);
  }, []);

  const handleSubmit = async (values: FieldValues) => {
    if (user) {
      const userBackendData = {
        email: user?.userEmail,
        data: values,
      };

      const res = await updateUser(userBackendData).unwrap();
      if (res?.success) {
        toast.success("User updated successfully!!!");
      }
    }
  };
  return (
    <div>
      <h1 className="text-3xl text-center  font-semibold text-primary">
        My Account
      </h1>
      <br />
      <hr />
      <CustomForm
        onSubmit={handleSubmit}
        defaultValues={useDefaultValues}
        resolver={zodResolver(userSchema)}
      >
        <div className="md:flex justify-center gap-4 items-center my-2">
          <CustomInput name="firstName" label="First Name" type="text" />
          <CustomInput name="lastName" label="Last Name" type="text" />
        </div>

        <div className="md:flex justify-center gap-4 items-center my-2">
          <CustomInput name="name" label="Full Name" type="text" />
          <CustomInput name="gender" label="Gender" type="text" />
        </div>

        <div className="md:flex justify-center gap-4 items-center my-3">
          <CustomInput name="dateOfBirth" label="Date of Birth" type="date" />
        </div>

        <div className="md:flex justify-center gap-4 items-center my-2">
          <CustomInput name="address.street" label="Street" type="text" />
          <CustomInput name="address.city" label="City" type="text" />
        </div>

        <div className="md:flex justify-center gap-4 items-center my-2">
          <CustomInput name="address.state" label="State" type="text" />
          <CustomInput name="address.country" label="Country" type="text" />
        </div>

        <div className="md:flex justify-center gap-4 items-center my-2">
          <CustomInput name="address.zipCode" label="Zip Code" type="text" />
          <CustomInput name="phoneNumber" label="Phone Number" type="text" />
        </div>

        <div className="flex justify-end mt-4">
          <Button type="submit">Submit</Button>
        </div>
      </CustomForm>
    </div>
  );
};

export default AccountDetailsPage;

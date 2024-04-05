"use client";

import { FieldValues } from "react-hook-form";
import CustomForm from "../form/CustomForm";
import CustomSelect from "../form/CustomSelect";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useUpdateUserMutation } from "@/redux/api/userApi";
import { toast } from "sonner";

const EditUserRoleModal = ({ email, open, setOpen }: any) => {
  const [updateUser] = useUpdateUserMutation();
  const handleSubmit = async (values: FieldValues) => {
    const backendData = {
      data: {
        role: values.role,
      },
      email: email,
    };
    try {
      const res = await updateUser(backendData).unwrap();
      console.log(res);
      if (res?.success) {
        toast.success("A User is updated successfully!!!");
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-sm overflow-y-auto max-h-[90vh] scroll-smooth hide-scrollbar">
        <DialogHeader>
          <DialogTitle>Update A Role</DialogTitle>
        </DialogHeader>
        <div className="md:p-2">
          <CustomForm onSubmit={handleSubmit}>
            <CustomSelect
              name="role"
              options={[
                { value: "guest", label: "Guest" },
                { value: "admin", label: "Admin" },
              ]}
            />

            <div className="flex justify-end  mt-4">
              <Button type="submit">Submit</Button>
            </div>
          </CustomForm>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserRoleModal;

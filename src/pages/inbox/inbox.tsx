import { FormInput, FormSelect, PageWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { FormProvider, useForm } from "react-hook-form";

const Inbox = () => {
  const formStore = useForm();

  const onSubmit = (data: any) => console.log("data", data);

  return (
    <PageWrapper>
      <FormProvider {...formStore}>
        <form onSubmit={formStore.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 4 }, (_, i) => i).map((value) => (
              <>
                <FormSelect
                  name={"form" + (value + 1)}
                  label={"Select " + (value + 1)}
                />
                <FormInput
                  name={"input" + (value + 1)}
                  label={"Input" + value}
                />
              </>
            ))}
          </div>
          <div className="flex justify-end gap-3">
            <Button type="submit">Save</Button>
            <Button variant={"outline"}>Cancel</Button>
          </div>
        </form>
      </FormProvider>
    </PageWrapper>
  );
};

export default Inbox;

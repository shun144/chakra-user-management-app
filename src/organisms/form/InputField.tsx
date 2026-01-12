import { useLoginUserContext } from "@/provider/auth/useLoginContext";
import { Field, Input } from "@chakra-ui/react";
import { type ComponentProps, type FC, memo, useRef } from "react";

type Props = Pick<ComponentProps<"input">, "defaultValue" | "placeholder"> & {
  label: string;
};

const InputField: FC<Props> = ({ label, ...props }) => {
  const ref = useRef<HTMLInputElement>(null);
  const { loginUser } = useLoginUserContext();
  const { isAdmin } = loginUser;

  return (
    <Field.Root>
      <Field.Label>{label}</Field.Label>
      <Input
        {...props}
        ref={ref}
        readOnly={!isAdmin}
        bg={isAdmin ? "white" : "gray.100"}
        caretColor={isAdmin ? "auto" : "transparent"}
      />
    </Field.Root>
  );
};

export default memo(InputField);

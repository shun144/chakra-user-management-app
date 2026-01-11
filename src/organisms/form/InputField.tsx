import React, { type FC, type ComponentProps, useRef, memo } from "react";
import { Field, Input } from "@chakra-ui/react";
import { useAuthContext } from "@/provider/auth/useAuthContext";

type Props = Pick<ComponentProps<"input">, "defaultValue" | "placeholder"> & {
  label: string;
};

const InputField: FC<Props> = ({ label, ...props }) => {
  const ref = useRef<HTMLInputElement>(null);
  const { isAdmin } = useAuthContext();

  return (
    <Field.Root>
      <Field.Label>{label}</Field.Label>
      <Input
        {...props}
        ref={ref}
        readOnly={!isAdmin}
        caretColor={isAdmin ? "auto" : "transparent"}
      />
    </Field.Root>
  );
};

export default memo(InputField);

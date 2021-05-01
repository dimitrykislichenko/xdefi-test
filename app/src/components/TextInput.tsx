import React from "react";
import styled from "styled-components";

interface ITextInputProps {
  className?: string;
  placeholder?: string;
  name: string;
  value?: string;
  onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  testId?: string;
}

const Wrapper = styled.textarea`
  padding: 14px;
  border-radius: 14px;
  height: 100px;
  border: none;
  resize: none;
  flex: 1 1 auto;
`;

export const TextInput = React.forwardRef(
  (
    { className, placeholder, name, value, onChange, testId }: ITextInputProps,
    ref?: React.Ref<HTMLTextAreaElement>
  ) => {
    return (
      <Wrapper
        ref={ref}
        className={className}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        data-testid={testId}
      />
    );
  }
);

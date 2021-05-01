import React, { FC, useCallback } from "react";
import styled from "styled-components";

interface IButtonProps {
  onClick?: () => void;
  testId?: string;
  disabled: boolean;
}

const Wrapper = styled.div<{ disabled: boolean }>`
  width: 100%;
  color: #ffffff;
  padding: 10px;
  align-items: center;
  text-align: center;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  border-radius: 28px;
  background: linear-gradient(
    137deg,
    rgb(237, 165, 111) 0%,
    rgb(238, 93, 95) 51%,
    rgb(239, 58, 87) 100%
  );
`;

export const Button: FC<IButtonProps> = ({
  children,
  onClick,
  testId,
  disabled,
}) => {
  const _onClick = useCallback(() => {
    if (!disabled) {
      onClick?.();
    }
  }, [onClick, disabled]);

  return (
    <Wrapper onClick={_onClick} data-testid={testId} disabled={disabled}>
      {children}
    </Wrapper>
  );
};

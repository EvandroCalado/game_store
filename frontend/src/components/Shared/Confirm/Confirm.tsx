import { Confirm as SemanticConfirm } from 'semantic-ui-react';

export type ConfirmProps = {
  [key: string]: unknown;
};

export function Confirm({ ...rest }: ConfirmProps) {
  return <SemanticConfirm className="confirm" size="mini" {...rest} />;
}

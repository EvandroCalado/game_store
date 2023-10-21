export type ExampleProps = {
  title?: string;
};

export function Example({ title = 'Example' }: ExampleProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

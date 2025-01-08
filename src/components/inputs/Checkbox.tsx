type CheckboxProps = {
  checked: boolean;
  onChange: (newValue: boolean) => void;
  label: string;
};

export default function Checkbox({ checked, label, onChange }: CheckboxProps) {
  return (
    <div className='flex items-center'>
      <input
        id={`checked-${label}`}
        type='checkbox'
        checked={checked}
        onChange={() => onChange(!checked)}
        className='w-4 h-4 text-primary bg-light border-light-500 rounded-md'
      />
      <label htmlFor={`checked-${label}`} className='ms-2 text-light-700'>
        {label}
      </label>
    </div>
  );
}

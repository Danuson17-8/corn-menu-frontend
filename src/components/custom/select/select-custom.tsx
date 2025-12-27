import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectCustomProps {
    label: string;
    items: readonly string[]
    value?: string
    onChange?: (value: string) => void
}

export function SelectCustom({label, items, value, onChange}: SelectCustomProps ) {
  return (
    <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
            <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent className="max-h-60 overflow-y-auto">
            <SelectGroup>
                <SelectLabel>{label}</SelectLabel>
                {items.map((item) => (
                    <SelectItem key={item} value={item}>{item}</SelectItem>
                ))}
            </SelectGroup>
        </SelectContent>
    </Select>
  )
}

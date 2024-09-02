import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover"

import { Check } from "lucide-react"

type Option = {
  id: string
  label: string
}

type FormComboboxProps = {
  // biome-ignore lint/suspicious/noExplicitAny:
  form: any
  options: Array<Option>
  valueName: string
}

const FormCombobox = ({ form, options, valueName }: FormComboboxProps) => (
  <FormField
    control={form.control}
    name={valueName}
    render={({ field }) => (
      <FormItem className="flex flex-col">
        <FormLabel>{valueName}</FormLabel>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button variant="outline" role="combobox">
                {field.value
                  ? options.find((option) => option.id === field.value)?.label
                  : `Select ${valueName}`}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search language..." />
              <CommandList>
                <CommandEmpty>No language found.</CommandEmpty>
                <CommandGroup>
                  {options.map((option) => (
                    <CommandItem
                      value={option.label}
                      key={option.id}
                      onSelect={() => {
                        form.setValue(valueName, option.id)
                      }}
                    >
                      <Check
                        className={cn(
                          option.id === field.value
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </FormItem>
    )}
  />
)

export default FormCombobox

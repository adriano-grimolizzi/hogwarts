import FormCombobox from "@/components/combobox/FormCombobox"
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
  Form,
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
import { createLazyFileRoute } from "@tanstack/react-router"
import { Check } from "lucide-react"

import { useForm } from "react-hook-form"

export const Route = createLazyFileRoute("/")({ component })

const languages = [
  { id: "id_it", label: "Italian", value: "it" },
  { id: "id_es", label: "Spanish", value: "es" },
  { id: "id_fr", label: "French", value: "fr" },
]

const themes = [
  { id: "id_dark", label: "Dark", value: "dark" },
  { id: "id_light", label: "Light", value: "light" },
]

function component() {
  const form = useForm({
    defaultValues: {
      // language: "fr",
    },
  })

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  function onSubmit(data: any) {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormCombobox form={form} options={languages} valueName="language" />
        <FormCombobox form={form} options={themes} valueName="theme" />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

import { Dispatch, FC, useState } from "react"
import ContactFormInitial, { ContactFormInput } from "./Input"
import ContactFormSucceeded from "./Succeeded"

interface ContactForm {
  onSubmit: Dispatch<ContactFormInput>
}

enum ContactFormProgress {
  Initial,
  Succeeded,
  Failed,
}

const ContactForm: FC<ContactForm> = ({ onSubmit }) => {
  const [progress, setProgress] = useState<ContactFormProgress>()

  const FormSteps = () => {
    switch (progress) {
      case ContactFormProgress.Succeeded:
        return <ContactFormSucceeded />
      default:
        return (
          <ContactFormInitial
            onSubmit={(data) => {
              onSubmit(data)
              setProgress(ContactFormProgress.Succeeded)
            }}
          />
        )
    }
  }

  return <FormSteps />
}

export default ContactForm

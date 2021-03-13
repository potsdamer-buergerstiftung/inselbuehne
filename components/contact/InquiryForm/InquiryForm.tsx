import { FC, useState } from "react"
import ContactFormFailed from "./Failed"
import ContactFormInitial, { ContactFormInput } from "./Initial"
import ContactFormLoading from "./Loading"
import ContactFormSucceeded from "./Succeeded"

interface ContactForm {
  onSubmit: (data: ContactFormInput) => Promise<any>
}

enum ContactFormProgress {
  Initial,
  Submitted,
  Succeeded,
  Failed,
}

const ContactForm: FC<ContactForm> = ({ onSubmit }) => {
  const [progress, setProgress] = useState<ContactFormProgress>()
  const [formData, setFormData] = useState<ContactFormInput>()

  const FormSteps = () => {
    switch (progress) {
      case ContactFormProgress.Succeeded:
        return <ContactFormSucceeded />
      case ContactFormProgress.Failed:
        return (
          <ContactFormFailed
            onClick={() => {
              setProgress(ContactFormProgress.Initial)
            }}
          />
        )
      case ContactFormProgress.Submitted:
        return <ContactFormLoading />
      default:
        return (
          <ContactFormInitial
            data={formData}
            onSubmit={(data) => {
              setProgress(ContactFormProgress.Submitted)
              setFormData(data)
              onSubmit(data)
                .then(() => {
                  setProgress(ContactFormProgress.Succeeded)
                })
                .catch(() => {
                  setProgress(ContactFormProgress.Failed)
                })
            }}
          />
        )
    }
  }

  return <FormSteps />
}

export default ContactForm

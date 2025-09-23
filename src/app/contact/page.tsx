"use client"

import WaveSection from "@/components/WaveSection";
import { Button, FieldError, Form, Input, Label, TextField } from "react-aria-components";

export default function Contact() {
  return (
    <main>
      <WaveSection />
      <div className="bg-[#7CCCF8] flex justify-center pb-8">
        <div className="w-[1112px] flex flex-col p-5 items-start gap-8 rounded-2xl bg-neutral-white">
          <p>Drop us a line here or say hi at <a href="mailto:hello@nopoolproductions.com" className="text-brand-primary">hello@nopoolproductions.com</a></p>
          <Form className="flex flex-col gap-8">
            <TextField name="full-name" type="text" isRequired className="flex flex-col">
              <Label>Full Name *</Label>
              <Input className="self-stretch rounded-sm border-2 border-neutral-black bg-white" data-1p-ignore data-lpignore="true" data-protonpass-ignore="true" data-bwignore />
              <FieldError />
            </TextField>
            <TextField name="email" type="email" isRequired className="flex flex-col">
              <Label>Email *</Label>
              <Input className="self-stretch rounded-sm border-2 border-neutral-black bg-white" data-1p-ignore data-lpignore="true" data-protonpass-ignore="true" data-bwignore />
              <FieldError />
            </TextField>
            <TextField name="company" type="text" className="flex flex-col">
              <Label>Company</Label>
              <Input className="self-stretch rounded-sm border-2 border-neutral-black bg-white" data-1p-ignore data-lpignore="true" data-protonpass-ignore="true" data-bwignore />
              <FieldError />
            </TextField>
            <TextField name="message" type="text" isRequired className="flex flex-col">
              <Label>Message *</Label>
              <Input className="self-stretch rounded-sm border-2 border-neutral-black bg-white" data-1p-ignore data-lpignore="true" data-protonpass-ignore="true" data-bwignore autoComplete="off" />
              <FieldError />
            </TextField>
            <Button type="submit">Submit</Button>
          </Form>
        </div>

      </div>
    </main>
  );
}
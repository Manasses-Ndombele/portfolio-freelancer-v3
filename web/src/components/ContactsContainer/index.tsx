"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import "@/styles/components/contacts-container.scss";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Este campo é obrigatório!"),
  contact_way: Yup.string().required("Este campo é obrigatório!"),
  project_name: Yup.string().required("Este campo é obrigatório!"),
  project_example: Yup.string().required("Este campo é obrigatório!"),
  project_description: Yup.string().required("Este campo é obrigatório!"),
});

export default function ContactsContainer() {
  const { t } = useTranslation();
  const [submitForm, setSubmitForm] = useState<{
    submitted: boolean;
    success: boolean | undefined;
  }>({
    submitted: false,
    success: undefined,
  });

  async function sendEmail(formDatas: object): Promise<void> {
    try {
      const response = await fetch(
        "https://backend-vgq4.onrender.com/api/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formDatas),
        }
      );

      if (!response.ok) {
        setSubmitForm({ submitted: true, success: false });
        location.reload();
      }

      const result = await response.json();
      setSubmitForm({ submitted: true, success: true });
      return result;
    } catch {
      setSubmitForm({ submitted: true, success: false });
      location.reload();
    }
  }

  return (
    <div id="contacts-container">
      <div id="social-area">
        <div id="social-container">
          <h2>{t("contacts-container.social.title-a")}</h2>
          <nav>
          <Link
              href="https://www.instagram.com/manassesalbertondombele"
              target="_blank"
              rel="external"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://github.com/Manasses-Ndombele/"
              target="_blank"
              rel="external"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/manassés-ndombele-384239327"
              target="_blank"
              rel="external"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://t.me/+244940971492"
              target="_blank"
              rel="external"
            >
              <FaTelegram />
            </Link>
            <Link
              href="https://wa.me/244954262072?text=Olá,%20gostaria%20de%20saber%20quanto%20cobrarias%20por%20um%20projeto%20com%20o%20seguinte%20objetivo:%20"
              target="_blank"
              rel="external"
            >
              <FaWhatsapp />
            </Link>
          </nav>
        </div>
        <div id="email-container">
          <h2>{t("contacts-container.social.title-b")}</h2>
          <p>manassesndombelefreelancer@gmail.com</p>
        </div>
      </div>
      <div id="budget-container">
        <div id="budget-container-copy">
          <h2>{t("contacts-container.form.title")}</h2>
          <p>{t("contacts-container.form.description")}</p>
        </div>
        <div id="budget-form-container">
          <Formik
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              const requestBody = {
                clientName: values.name,
                clientContactWay: values.contact_way,
                projectName: values.project_name,
                projectExample: values.project_example,
                projectDescription: values.project_description,
              };

              sendEmail(requestBody);
              resetForm();
            }}
            initialValues={{
              name: "",
              contact_way: "",
              project_name: "",
              project_example: "",
              project_description: "",
            }}
            validationSchema={validationSchema}
          >
            <Form method="post">
              <p
                className={`result-text ${submitForm.submitted ? "show" : "hidden"}${
                  submitForm.success ? " success-text" : " error-text"
                }`}
              >
                {t(
                  `contacts-container.submit-msg.${
                    submitForm.submitted ? "success" : "error"
                  }`
                )}
              </p>
              <div className="field-container">
                <Field
                  type="text"
                  name="name"
                  id="name-field"
                  placeholder={t("contacts-container.form.placeholder-a")}
                />
                <ErrorMessage component="span" name="name" />
              </div>
              <div className="field-container">
                <Field
                  type="text"
                  name="contact_way"
                  id="contact-way-field"
                  placeholder={t("contacts-container.form.placeholder-b")}
                />
                <ErrorMessage component="span" name="contact_way" />
              </div>
              <div className="field-container">
                <Field
                  type="text"
                  name="project_name"
                  id="project-name-field"
                  placeholder={t("contacts-container.form.placeholder-c")}
                />
                <ErrorMessage component="span" name="project_name" />
              </div>
              <div className="field-container">
                <Field
                  type="text"
                  name="project_example"
                  id="project-example-field"
                  placeholder={t("contacts-container.form.placeholder-d")}
                />
                <ErrorMessage component="span" name="project_example" />
              </div>
              <div className="field-container">
                <Field
                  type="text"
                  name="project_description"
                  id="project-description-field"
                  placeholder={t("contacts-container.form.placeholder-e")}
                  as="textarea"
                />
                <ErrorMessage component="span" name="project_description" />
              </div>
              <button type="submit">
                {t("contacts-container.form.submit-btn")}
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

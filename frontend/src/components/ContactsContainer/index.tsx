"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Este campo é obrigatório!"),
  contact_way: Yup.string().required("Este campo é obrigatório!"),
  project_name: Yup.string().required("Este campo é obrigatório!"),
  project_example: Yup.string().required("Este campo é obrigatório!"),
  project_description: Yup.string().required("Este campo é obrigatório!"),
});

export default function ContactsContainer() {
  return (
    <div id="contacts-container">
      <div id="social-area">
        <div id="social-container">
          <h2>Redes sociais</h2>
          <nav>
            <Link
              href="https://github.com/Manasses-Ndombele/"
              target="_blank"
              rel="external"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ManassesNdombele"
              target="_blank"
              rel="external"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://t.me/+244923224456"
              target="_blank"
              rel="external"
            >
              <FaTelegram />
            </Link>
            <Link
              href="https://wa.me/244923224456?text=Olá,%20gostaria%20de%20saber%20quanto%20cobrarias%20por%20um%20projeto%20com%20o%20seguinte%20objetivo:%20"
              target="_blank"
              rel="external"
            >
              <FaWhatsapp />
            </Link>
          </nav>
        </div>
        <div id="email-container">
          <h2>Envie email para</h2>
          <p>manassesndombelefreelancer@gmail.com</p>
        </div>
      </div>
      <div id="budget-container">
        <div id="budget-container-copy">
          <h2>Peça já um orçamento!</h2>
          <p>
            Insira seus dados e descreva seu projeto para mim, eu vou analisar o
            seu projeto e irei te enviar o orçamento através do contato
            fornecido o mais rápido possível! Então envia já os seus dados para
            darmos os primeiros passos para que a sua idéia possa ser
            transformada em realidade!
          </p>
        </div>
        <div id="budget-form-container">
          <Formik
            onSubmit={() => {
              console.log("Formulário enviado!");
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
              <div className="field-container">
                <Field
                  type="text"
                  name="name"
                  id="name-field"
                  placeholder="Seu nome"
                />
                <ErrorMessage component="span" name="name" />
              </div>
              <div className="field-container">
                <Field
                  type="text"
                  name="contact_way"
                  id="contact-way-field"
                  placeholder="Forma de contato"
                />
                <ErrorMessage component="span" name="contact_way" />
              </div>
              <div className="field-container">
                <Field
                  type="text"
                  name="project_name"
                  id="project-name-field"
                  placeholder="Nome do projeto"
                />
                <ErrorMessage component="span" name="project_name" />
              </div>
              <div className="field-container">
                <Field
                  type="text"
                  name="project_example"
                  id="project-example-field"
                  placeholder="Domínio ou nome de exemplo ou projeto feito"
                />
                <ErrorMessage component="span" name="project_example" />
              </div>
              <div className="field-container">
                <Field
                  type="text"
                  name="project_description"
                  id="project-description-field"
                  placeholder="Descrição do projeto"
                  as="textarea"
                />
                <ErrorMessage component="span" name="project_description" />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

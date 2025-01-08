"use client";
import React from "react";
import { Formik, Form, Field } from "formik";

export default function SearchArea() {
  return (
    <div id="search-area">
      <Formik
        initialValues={{ search_select: "" }}
        onSubmit={(values) => {
          console.log(values.search_select);
        }}
      >
        <Form method="get">
          <label htmlFor="search-select-field">
            O que está procurando hoje?
          </label>
          <Field as="select" name="search_select" id="search-select-field" defaultValue="all" value="all">
            <option value="all">Todos projetos</option>
            <option value="vendas">Site de vendas</option>
            <option value="branding">Site para branding</option>
            <option value="webSystems">Sistemas web</option>
            <option value="automations">Automações</option>
            <option value="others">Outros</option>
          </Field>
        </Form>
      </Formik>
    </div>
  );
}

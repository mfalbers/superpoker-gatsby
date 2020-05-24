import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FormTextInputField from '../components/FormTextInputField';

import Button from 'react-bootstrap/Button';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <div className="row p-4">
            <div className="col-sm">
                <div>
                    <h4 className="alert-heading">Let's do some poker planning!</h4>
                    <p>Grab your team and let's estimate some work.</p>
                    <p> Not familiar with Agile Poker Planning?</p>
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.mountaingoatsoftware.com/agile/planning-poker">What is Poker Planning?</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.atlassian.com/blog/agile/planning-poker-sane-healthy">Agile Poker Planning</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-sm alert alert-primary" role="alert">
                {/* <form>
                    <div>
                        <label htmlFor="newgame-title">Start a new Planning Session</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="newgame-title" 
                            aria-describedby="titleHelp"
                            placeholder="name the poker room"
                        />
                        <small id="titleHelp" class="form-text text-muted">Give your room a name.</small>
                    </div>
                    <Button type="submit" variant="primary" className="mt-3 float-right" id="newgame-create">Create</Button>
                </form> */}
                <Formik
                    initialValues={{ name: '' }}
                    validationSchema={Yup.object({
                    name: Yup.string()
                        .max(50, 'Must be 50 characters or less')
                        .required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);

                        // create or join a new room

                    }, 400);
                    }}
                >
                    <Form className="form">
                        <p className="form__instructions">
                        Start a new Planning Session
                        </p>
                        <FormTextInputField
                            label="Room Name"
                            name="name"
                            type="text"
                            placeholder="name your poker room"
                        />
                        <Button className="form__button" variant="primary" type="submit">Create</Button>
                    </Form>
                </Formik>
            </div>
        </div>
    </Layout>
)

export default IndexPage

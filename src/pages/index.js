import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from 'react-bootstrap/Button';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="row p-4">
        <div className="col-sm">
            <div>
                <h4 className="alert-heading">Let's do some poker planning!</h4>
                <p>Grab your team and let's estimate some work.</p>
                <p>
                    Not familiar with Agile Poker Planning?
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.mountaingoatsoftware.com/agile/planning-poker">What is Poker Planning?</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.atlassian.com/blog/agile/planning-poker-sane-healthy">Agile Poker Planning</a></li>
                    </ul>
                </p>
            </div>
        </div>
        <div className="col-sm alert alert-primary" role="alert">
            <form>
                <div>
                    <label for="newgame-title">Start a new Planning Session</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="newgame-title" 
                        aria-describedby="titleHelp"
                        placeholder="name the poker room"
                    />
                    {/* <small id="titleHelp" class="form-text text-muted">Give your room a name.</small> */}
                </div>
                <Button type="submit" variant="primary" className="mt-3 float-right" id="newgame-create">Create</Button>
            </form>
        </div>
    </div>
  </Layout>
)

export default IndexPage

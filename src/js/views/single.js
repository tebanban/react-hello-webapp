import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Media } from "react-bootstrap";
import detailImg from "../../img/800x600.png";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<>
			<Container>
				<Media>
					<img width={600} height={400} className="mr-3" src={detailImg} alt="Generic placeholder" />
					<Media.Body className="align-text-center">
						<h5>{store.peopleList[params.theid].name}</h5>
						<p>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
							commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
							condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras
							purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
							nisi vulputate fringilla.
						</p>
					</Media.Body>
				</Media>

				<Link to="/blog" className="btn btn-success">
					THE BLOG
				</Link>
			</Container>
		</>
	);
};

Single.propTypes = {
	match: PropTypes.object
};

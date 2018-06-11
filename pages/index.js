import Head from 'next/head';
import Router from 'next/router'
import {Form, Text} from 'react-form';

const handleSubmit = values => Router.push({
	pathname: '/result',
	query: values
});

export default () => <div>
	<Head>
		<title>Employee payslip for a flexible pay cycle</title>
	</Head>
	<h1>Welcome to next.js!</h1>
	<Form onSubmit={handleSubmit}>
		{({submitForm}) => (
			<form onSubmit={submitForm}>
				Your name:
				<Text field="name"/>
				<button>Calculate</button>
			</form>
		)}
	</Form>
</div>;

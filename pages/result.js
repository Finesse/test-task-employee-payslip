import Link from 'next/link';

const Result = ({name}) => <div>
	<Link href="/"><a>Go back</a></Link>
	<div>Your name is {name}</div>
</div>;

Result.getInitialProps = ({query}) => {
	return {
		name: query.name
	};
};

export default Result;

import PostsList from './PostsList'
import Navbar from './Navbar'

export default function PostsPage({ addArticle, handleFormField, formData, articles, deleteArticle }) {
	return (
		<>
			<Navbar />
			<div className='container'>
				<h1>I nostri Post</h1>
				<PostsList
					addArticle={addArticle}
					handleFormField={handleFormField}
					formData={formData}
					articles={articles}
					deleteArticle={deleteArticle}
				/>
			</div>
		</>
	)
}

import AppMain from '../components/AppMain'

export default function PostsList({ addArticle, handleFormField, formData, articles, deleteArticle }) {
	return (
		<>
			<div className='container'>
				<AppMain
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

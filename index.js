import Aula from 'aula'

const main = async () => {
	console.log("BOT starting...")
	const JO = Aula({user:{email: 'aulatest@aula.bg', password:'qweasd123'}})
	await JO.connect()
	console.log("Connected")
	console.log("Getting changelog from server...")
	const changelog = await JO.userChangelogGet({})
	console.log(changelog)
}

main()

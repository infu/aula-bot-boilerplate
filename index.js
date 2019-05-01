import Aula from 'aula'
import FormData from "form-data";
import fetch from "node-fetch";

const main = async () => {
	console.log("BOT starting...")
	const JO = Aula({user:{email: 'aulatest@aula.bg', password:'qweasd123'}, ref_FormData: FormData, ref_fetch: fetch})
	await JO.connect()
	console.log("Connected")
	console.log("Getting changelog from server...")
	const changelog = await JO.userChangelogGet({})
	console.log(changelog)
}

main()

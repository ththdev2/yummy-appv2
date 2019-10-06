import { observable, action } from "mobx"

export default class RegisterStore {
	constructor(root) {
		this.root = root
	}

	@observable step = 0
	@observable name = ""
	@observable birth = null
	@observable email = ""
	@observable password = ""
	@observable canSubmit = false

	@action.bound
	onChange = (name, value, rules) => {
		this[name] = value

		if (rules) {
			this.check(rules, value)
		}
	}

	@action
	onSubmit = () => {
		if (this.canSubmit) {
			this.step < 4 ? this.step++ : this.register()
			this.canSubmit = false
		}
	}

	@action.bound
	check(rules, value) {
		rules(value) ? (this.canSubmit = true) : (this.canSubmit = false)
		console.log(rules(value))
	}

	@action
	register = () => {
		console.log("Register")
	}
}

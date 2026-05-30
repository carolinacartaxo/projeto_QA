import "./commands";

Cypress.on("uncaught:exception", (error) => {
	if (error.message.includes("Cannot use 'in' operator to search for 'textContent' in null")) {
		return false;
	}

	return undefined;
});

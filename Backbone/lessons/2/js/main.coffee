document.addEventListener 'DOMContentLoaded', (event) ->
	event.stopPropagation()
	InvoiceItemModel = Backbone.Model.extend {
		defaults: {
			some: 'some'
			date: ->
				new Date().toISOString()
		}
		initialize: ->
			@set "prop", "AFTER MODEL COMPLATE SET PROPERTY"
			@unset "prop"
		idAttribute: "_id"
	}
	invoiceItemModel = new InvoiceItemModel
		date: '2013-04-24'
		description: 'alert("Wooden Toy House")'
		price: 22
		quantity: 3

	console.log invoiceItemModel.escape 'description'

	hacker = new Backbone.Model
		name: "<script>alert('xss')</script>"
	escaped_name = hacker.escape 'name'

	console.log invoiceItemModel
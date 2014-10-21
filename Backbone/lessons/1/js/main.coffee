(($, n) ->

	n.ready ->
		InvoiceItemModel = Backbone.Model.extend
			defaults:
				price: 0
				quantity: 0

			calculateAmount: ->
				@get('price') * @get 'quantity'

		invoiceItemModel = new InvoiceItemModel
			price: 2
			quantity: 3

		PreviewInvoiceItemView = Backbone.View.extend
			template: _.template '\
				Price: <%= price %>.\
				Quantity: <%= quantity %>.\
				Amounth: <%= amount %>.'
			render: ->
				html = @template
					price: @model.get 'price'
					quantity: @model.get 'quantity'
					amount: @model.calculateAmount()

				$(@el).html html

		previewInvoiceItemView = new PreviewInvoiceItemView
			model: invoiceItemModel
			el: 'body'

		previewInvoiceItemView.render()

)(jQuery, N)
// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const controllers	=	require('../controllers')

router.get('/:resource',(req,res)=>{
	const resource	=	req.params.resource
	const controller	=	controllers[resource]

	const filter	=	req.query

	if(controller == null){
		res.json({
			confirmation:'fail',
			message: 'Invalid request.'
		})
		return 
	}
	controller.get(filter)
	.then(data=>{
		res.json({
			confirmation: 'success',
			data:data
		})
	})
	.catch(err=>{
		res.json({
			confirmation: 'fail',
			message: err.message
		})
		
	})
})

router.get('/:resource/:id',(req,res)=>{
	const resource=	req.params.resource
	const id	=	req.params.id

	const controller=	controllers[resource]

	if(controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid resource.'
		})
		return
	}

	controller.getById(id)
	.then(data=>{
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err=>{
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})


// POST - create new entities record
router.post('/:resource',(req,res)=>{
	const resource=	req.params.resource
	const controller=	controllers[resource]

	if(controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid resource.'
		})
		return
	}

	controller.post(req.body)
	.then(data=>{
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err=>{
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

// PUT - to update data
router.put('/:resource/:id',(req,res)=>{
	const resource 	=	req.params.resource
	const id	=	req.params.id
	const controller=	controllers[resource]

	if(controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid resource'
		})
		return
	}

	controller.put(id,req.body)
	.then(data=>{
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err=>{
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

// DELETE - to delete data record
router.delete('/:resource/:id',(req,res)=>{
	const resource=	req.params.resource
	const id 	=	req.params.id
	const controller=	controllers[resource]

	if(controller == null){
		res.json({
			confirmation: 'fail',
			message:'Invalid resource'
		})
		return
	}

	controller.delete(id)
	.then(id=>{
		res.json({
			confirmation: 'success',
			data: id
		})
	})
	.catch(err=>{
		res.json({
			confirmation: 'fail',
			message:err.message
		})
	})
})

module.exports = router

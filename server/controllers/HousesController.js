import BaseController from "../utils/BaseController";
import { housesService } from "../services/HousesService";

export class HousesController extends BaseController{

  
 
 
  
  constructor(){
    super("api/houses")
      this.router
        .get("", this.getAll)
        .get("/:id", this.getById)
        .post("", this.create)
        .put("/:id", this.edit)
        .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await housesService.find(req.query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let data = await housesService.getById(req.params.id)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await housesService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await housesService.edit(req.body)
      res.send(data)      
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      
    } catch (error) {
      next(error)
    }
  }
 




}
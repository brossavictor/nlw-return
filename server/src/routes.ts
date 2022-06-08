import express from 'express'
import nodemailer from 'nodemailer'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter'
import { prisma } from './prisma'
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedback-repository'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case'

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const prismaFeedbackRepository = new PrismaFeedbackRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodemailerMailAdapter
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  if (typeof req.body.name == 'number') {
    return res.status(400).json({ error: '' })
  }
  return res.status(201).send()
})

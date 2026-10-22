import type { PracticeRepository } from '@/application/ports/PracticeRepository'
import type { HomeVisitPractice } from '@/domain/practice/HomeVisitPractice'
import { InstagramHandle } from '@/domain/shared/InstagramHandle'
import { PhoneNumber } from '@/domain/shared/PhoneNumber'

const practice: HomeVisitPractice = {
  veterinarian: {
    displayName: 'Dra. Indiana Gomes',
    fullName: 'Dra. Indiana Gomes da Silva',
    role: 'Médica veterinária de cães e gatos',
    credentials:
      'Formada pela UFRB, mestre pela mesma universidade e com 2 anos de aprimoramento em Clínica Médica de Pequenos Animais.',
    practicingSince: 2018,
    education: [
      {
        title: 'Mestrado Profissional em Defesa Agropecuária',
        institution: 'Universidade Federal do Recôncavo da Bahia (UFRB)',
        startYear: 2020,
        endYear: 2023,
      },
      {
        title: 'Aprimoramento em Clínica Médica de Pequenos Animais',
        institution: 'UNIME (União Metropolitana de Educação e Cultura)',
        startYear: 2018,
        endYear: 2020,
      },
      {
        title: 'Bacharelado em Medicina Veterinária',
        institution: 'Universidade Federal do Recôncavo da Bahia (UFRB)',
        startYear: 2011,
        endYear: 2017,
      },
    ],
    bio: [
      'Escolhi atender em domicílio porque acredito que cada animal merece ser examinado com tempo e sem medo. Na sua casa, consigo conhecer o pet de verdade: como ele reage, como vive e o que a família pode fazer para que ele fique bem.',
      'Na rotina clínica, ganhei experiência em atendimentos emergenciais, coleta de material para exames e procedimentos de internamento. Hoje atendo exclusivamente cães e gatos, com paciência, dedicação e foco em prevenção.',
    ],
    linkedinUrl: 'https://www.linkedin.com/in/indiana-gomes-da-silva-599605303/',
  },

  contacts: {
    whatsapp: PhoneNumber.create('+55 75 99133-7966'),
    instagram: InstagramHandle.create('@indianagomes_vet'),
  },

  location: { city: 'Lauro de Freitas', region: 'BA', country: 'BR' },

  species: ['dog', 'cat'],

  areas: [{ name: 'Lauro de Freitas' }, { name: 'Salvador' }, { name: 'Região metropolitana' }],

  benefits: [
    {
      kind: 'calm',
      title: 'Menos estresse',
      description:
        'Gatos e cães medrosos ficam mais tranquilos no próprio território. O exame fica mais fiel e a experiência, mais leve.',
    },
    {
      kind: 'no-commute',
      title: 'Sem deslocamento',
      description:
        'Nada de trânsito, transporte por aplicativo que recusa pet ou espera em clínica. Ideal para idosos, filhotes e quem tem mais de um animal.',
    },
    {
      kind: 'routine',
      title: 'Olhar sobre a rotina',
      description:
        'Ver onde o pet come, dorme e brinca ajuda a entender hábitos e a dar orientações que funcionam no seu dia a dia.',
    },
  ],

  services: [
    {
      id: 'consulta',
      name: 'Consulta clínica',
      description: 'Exame físico completo, avaliação de sintomas e orientação de tratamento.',
    },
    {
      id: 'vacinacao',
      name: 'Vacinação',
      description: 'Aplicação e acompanhamento do calendário de vacinas, com registro na carteirinha.',
    },
    {
      id: 'check-up',
      name: 'Check-up preventivo',
      description: 'Avaliação periódica para identificar problemas cedo, especialmente em pets idosos.',
    },
    {
      id: 'exames',
      name: 'Coleta de exames',
      description: 'Coleta de sangue e outras amostras em casa, com envio para laboratório.',
    },
    {
      id: 'filhotes',
      name: 'Filhotes',
      description: 'Primeira consulta, vermifugação, alimentação e cuidados das primeiras semanas.',
    },
    {
      id: 'retornos',
      name: 'Retornos e medicações',
      description: 'Acompanhamento de tratamentos e aplicação de medicamentos prescritos.',
    },
  ],

  faq: [
    {
      question: 'Quais animais você atende?',
      answer: 'Somente cães e gatos, de todas as idades.',
    },
    {
      question: 'Você atende emergências?',
      answer:
        'O atendimento domiciliar é agendado. Em uma emergência grave, como atropelamento, convulsão ou dificuldade para respirar, leve o pet imediatamente a um hospital veterinário 24 horas.',
    },
    {
      question: 'Preciso agendar com antecedência?',
      answer:
        'Sim, todos os atendimentos são agendados pelo WhatsApp ou pelo Instagram. Quanto antes você chamar, mais opções de horário.',
    },
    {
      question: 'Como preparo a casa para a consulta?',
      answer:
        'Separe a carteira de vacinação e exames anteriores, se tiver. Para gatos, deixe o pet em um cômodo com a porta fechada pouco antes do horário, assim ele não se esconde em lugares difíceis.',
    },
    {
      question: 'E se o meu pet precisar de exames de imagem ou cirurgia?',
      answer:
        'Você recebe o encaminhamento e a orientação de onde fazer, e o acompanhamento continua em casa depois.',
    },
  ],
}

export class StaticPracticeRepository implements PracticeRepository {
  get(): HomeVisitPractice {
    return practice
  }
}

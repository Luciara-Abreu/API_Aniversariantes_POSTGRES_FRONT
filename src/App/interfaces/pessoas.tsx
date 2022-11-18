export interface IPatient {
  emergencyContactPhone?: string
  emergencyContactName?: string
  livesWith?: string
  civilStatus?: string
  ethnicity?: string
  religion?: string
  sexualOrientation?: string
  gender?: string
  cpf: string
  medicalRecord?: string | number
  primaryEmail?: string
  secondaryEmail?: string
  primaryPhone?: string
  secondaryPhone?: string
  educationalLevel?: string | number
  profession?: string
  workPosition?: string
  workSection?: string
}


export interface IEditPatientParams {
  medicalRecord: number
  name?: string
  socialName?: string
  birthDate?: Date
  primaryEmail?: string | null
  secondaryEmail?: string | undefined
  primaryPhone?: string
  secondaryPhone?: string | undefined
  country?: string
  state?: string
  city?: string
  street?: string
  zipCode?: string
  neighborhood?: string
  addressNumber?: string
  addressComplement?: string
  gender?: number
  sexualOrientation?: number
  religion?: number
  ethnicity?: number
  educationalLevel?: number
  profession?: string | null
  workSection?: number
  workPosition?: number
  civilStatus?: number
  livesWith?: Array<{
    id: number
    name: string
    contact: string
  }>
  emergencyContact?: {
    name: string | undefined
    mainPhone: string | undefined
    secondaryPhone?: string | undefined
    relationship?: string | undefined
  } | null
}
export interface IPatientProps {
  patient: IPatient
}

export enum PatientFieldName {
  patientName = 'patientName',
  socialName = 'socialName',
  sex = 'sex',
  birthDate = 'birthDate',
  cpf = 'cpf',
  medicalRecord = 'medicalRecord',
  primaryPhone = 'primaryPhone',
  secondaryPhone = 'secondaryPhone',
  primaryEmail = 'primaryEmail',
  secondaryEmail = 'secondaryEmail',
  gender = 'gender',
  sexualOrientation = 'sexualOrientation',
  religion = 'religion',
  ethnicity = 'ethnicity',
  educationalLevel = 'educationalLevel',
  profession = 'profession',
  workPosition = 'workPosition',
  workSection = 'workSection',
  civilStatus = 'civilStatus',
  livesWith = 'livesWith',
  emergencyContactName = 'emergencyContactName',
  emergencyContactPhone = 'emergencyContactPhone',
  zipCode = 'zipCode',
  street = 'street',
  addressNumber = 'addressNumber',
  addressComplement = 'addressComplement',
  neighborhood = 'neighborhood',
  city = 'city',
  state = 'state'
}

export interface PatientFormDefaultValues {
  [PatientFieldName.patientName]: string
  [PatientFieldName.socialName]: string
  [PatientFieldName.sex]: number
  [PatientFieldName.birthDate]: string
  [PatientFieldName.cpf]: string
  [PatientFieldName.medicalRecord]: number
  [PatientFieldName.primaryPhone]: string
  [PatientFieldName.secondaryPhone]: string
  [PatientFieldName.primaryEmail]: string
  [PatientFieldName.secondaryEmail]: string
  [PatientFieldName.gender]: number
  [PatientFieldName.sexualOrientation]: number
  [PatientFieldName.religion]: number
  [PatientFieldName.ethnicity]: number
  [PatientFieldName.educationalLevel]: number
  [PatientFieldName.profession]: string
  [PatientFieldName.workPosition]: string
  [PatientFieldName.workSection]: string
  [PatientFieldName.civilStatus]: number
  [PatientFieldName.livesWith]: number
  [PatientFieldName.emergencyContactName]: string
  [PatientFieldName.emergencyContactPhone]: string
  [PatientFieldName.zipCode]: string
  [PatientFieldName.street]: string
  [PatientFieldName.addressNumber]: string
  [PatientFieldName.addressComplement]: string
  [PatientFieldName.neighborhood]: string
  [PatientFieldName.city]: string
  [PatientFieldName.state]: string
}

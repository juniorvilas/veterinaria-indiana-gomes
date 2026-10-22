/** Value object: telefone brasileiro com DDI 55, armazenado só com dígitos. */
export class PhoneNumber {
  private constructor(private readonly digits: string) {}

  static create(raw: string): PhoneNumber {
    const digits = raw.replace(/\D/g, '')
    if (!/^55\d{10,11}$/.test(digits)) {
      throw new Error(`Telefone inválido: "${raw}". Use o formato +55 DDD número.`)
    }
    return new PhoneNumber(digits)
  }

  /** Somente dígitos, como o wa.me espera: 5575991337966 */
  get value(): string {
    return this.digits
  }

  /** +5575991337966, para links tel: */
  get e164(): string {
    return `+${this.digits}`
  }

  /** (75) 99133-7966 */
  get display(): string {
    const ddd = this.digits.slice(2, 4)
    const local = this.digits.slice(4)
    return `(${ddd}) ${local.slice(0, -4)}-${local.slice(-4)}`
  }

  equals(other: PhoneNumber): boolean {
    return this.digits === other.digits
  }
}

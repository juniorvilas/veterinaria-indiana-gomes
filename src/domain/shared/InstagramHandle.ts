/** Value object: perfil do Instagram, aceita "@perfil", "perfil" ou a URL completa. */
export class InstagramHandle {
  private constructor(private readonly username: string) {}

  static create(raw: string): InstagramHandle {
    const username = raw
      .trim()
      .replace(/^https?:\/\/(www\.)?instagram\.com\//i, '')
      .replace(/^@/, '')
      .replace(/\/.*$/, '')
    if (!/^[A-Za-z0-9._]{1,30}$/.test(username)) {
      throw new Error(`Perfil do Instagram inválido: "${raw}"`)
    }
    return new InstagramHandle(username)
  }

  get display(): string {
    return `@${this.username}`
  }

  get url(): string {
    return `https://www.instagram.com/${this.username}/`
  }
}

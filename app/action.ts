'use server'

const greetings = ['hello world', 'looks sus', 'how do you do?', 'go away']
export default async function testAction() {
  return {
    message: greetings[Math.floor(Math.random() * greetings.length)],
  }
}

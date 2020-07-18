const { PO_TOKEN, SLACK_WEBHOOK } = process.env

module.exports = {
  provider: {
    name: 'POEditor',
    token: PO_TOKEN,
    project: '225261'
  },
  notification: {
    enabled: true,
    slack: {
      webhookUrl: SLACK_WEBHOOK,
      channel: 'CD4G029PA',
      name: 'K.Edge',
      thumbUrl: 'https://new.edgesolutions.de/favicon-120.png'
    }
  },
  destination: './src/i18n/translations/'
}

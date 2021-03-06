const { Structures } = require('discord.js');
const KlasaGuildMemberManager = require('./KlasaGuildMemberManager');

Structures.extend('Guild', Guild => {
	/**
	 * Mutates KlasaGuild to include a KlasaMemberStore with our extensions
	 * @extends external:Guild
	 */
	class KlasaGuild extends Guild {

		constructor(client, data) {
			// avoid double iteration by the super class populating the members collection
			const { members, ...restData } = data || {};
			super(client, Object.keys(restData).length ? restData : undefined);

			/**
			 * Storage for KlasaMembers
			 * @since 0.0.1
			 * @type {KlasaGuildMemberManager}
			 */
			this.members = new KlasaGuildMemberManager(this, members);
		}

	}

	return KlasaGuild;
});
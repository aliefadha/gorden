'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('gallery_projects', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
            },
            title: {
                type: Sequelize.STRING
            },
            category: {
                type: Sequelize.STRING
            },
            type: {
                type: Sequelize.STRING
            },
            installation_type: {
                type: Sequelize.STRING
            },
            location: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            date: {
                type: Sequelize.DATEONLY
            },
            completion_date: {
                type: Sequelize.DATEONLY
            },
            image_url: {
                type: Sequelize.STRING
            },
            sort_order: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            is_featured: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('gallery_projects');
    }
};

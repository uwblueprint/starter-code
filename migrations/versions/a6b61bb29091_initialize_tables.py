"""initialize tables

Revision ID: a6b61bb29091
Revises: 
Create Date: 2019-03-17 17:53:53.496299

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a6b61bb29091'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'user', sa.Column('id', sa.Integer(), nullable=False, primary_key=True),
        sa.Column('email', sa.String(length=120), nullable=False, unique=True),
    )


def downgrade():
    op.drop_table('user')

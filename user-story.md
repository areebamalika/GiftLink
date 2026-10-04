# User Story

## Title
Create an Item Listing

## User Story
**As a** registered user,

**I want to** create a listing for a household item that I no longer need,

**So that** other users can find the item and request it for free.

## Acceptance Criteria

### Scenario 1: Registered user creates an item listing

**Given** I am a registered and logged-in user

**When** I enter the item title, description, category, and location and submit the listing

**Then** the item should be saved in the database and displayed in the available item listings.

### Scenario 2: User must be logged in

**Given** I am not logged in

**When** I try to create an item listing

**Then** I should be asked to log in before creating the listing.

### Scenario 3: Required information

**Given** I am logged in and creating an item listing

**When** I submit the listing without the required item information

**Then** the system should display a validation message and should not create the listing.

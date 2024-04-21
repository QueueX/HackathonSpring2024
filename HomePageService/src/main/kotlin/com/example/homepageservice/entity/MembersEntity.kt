package com.example.homepageservice.entity

import jakarta.persistence.*
import java.util.UUID

@Entity
@Table(name = "Members")
class MembersEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    var id: UUID? = null

    @Column(nullable = false)
    var name: String? = null

    @Column(unique = true, nullable = false)
    var photoUrl: String? = null

    var aboutUser: String? = null

    @ManyToOne
    @JoinColumn(name = "team_id", referencedColumnName = "id")
    var teamId: TeamEntity? = null

}
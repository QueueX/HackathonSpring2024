package com.example.authenticationservice.entity

import jakarta.persistence.*
import java.util.UUID

@Entity
@Table(name = "Teams")
class TeamEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    var id: UUID? = null

    @Column(unique = true, nullable = false)
    var teamName: String? = null

    @Column(unique = true, nullable = false)
    var bannerUrl: String? = null

    @OneToMany(mappedBy = "teamId")
    var members: List<MembersEntity>? = null

    @OneToOne(mappedBy = "teamId")
    var user: UserEntity? = null

}
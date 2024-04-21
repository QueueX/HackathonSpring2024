package com.example.authenticationservice.entity

import jakarta.persistence.*

@Entity
@Table(name = "Teams")
class TeamEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int? = null

    @Column(unique = true, nullable = false)
    var teamName: String? = null

    @Column(unique = true, nullable = false)
    var bannerUrl: String? = null

    @OneToMany(mappedBy = "teamId")
    var members: List<MembersEntity>? = null

    @OneToOne(mappedBy = "teamId")
    var user: UserEntity? = null

}